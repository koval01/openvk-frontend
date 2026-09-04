<script lang="ts">
  import 'leaflet/dist/leaflet.css';
  import { untrack } from 'svelte';
  import { overlay } from '../../stores/overlay.svelte';
  import { locale } from '../../stores/locale.svelte';

  let placeName = $state(overlay.geoDraft?.name ?? '');

  type LeafletModule = typeof import('leaflet');

  function leafletApi(mod: LeafletModule): LeafletModule {
    const withDefault = mod as LeafletModule & { default?: LeafletModule };
    return withDefault.default ?? mod;
  }

  function osmMap(node: HTMLDivElement) {
    let cancelled = false;
    let map: import('leaflet').Map | undefined;
    void (async () => {
      const leaflet = leafletApi(await import('leaflet'));
      if (cancelled) {
        return;
      }
      const draft = untrack(() => overlay.geoDraft);
      const start = draft
        ? ([draft.lat, draft.lng] as [number, number])
        : ([55.751244, 37.618423] as [number, number]);
      map = leaflet.map(node).setView(start, draft ? 13 : 10);
      leaflet
        .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; OpenStreetMap',
        })
        .addTo(map);
      let marker: import('leaflet').CircleMarker | undefined;
      const mark = (lat: number, lng: number) => {
        if (!map) {
          return;
        }
        marker?.remove();
        marker = leaflet.circleMarker([lat, lng], { radius: 8, color: '#2b587a' }).addTo(map);
      };
      if (draft) {
        mark(draft.lat, draft.lng);
      }
      map.on('click', (event: import('leaflet').LeafletMouseEvent) => {
        const { lat, lng } = event.latlng;
        mark(lat, lng);
        void namePlace(lat, lng);
      });
      requestAnimationFrame(() => map?.invalidateSize());
      window.setTimeout(() => map?.invalidateSize(), 160);
    })();
    return () => {
      cancelled = true;
      map?.remove();
    };
  }

  async function namePlace(lat: number, lng: number) {
    const fallback = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    let name = fallback;
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
        { headers: { Accept: 'application/json' } },
      );
      if (response.ok) {
        const body = (await response.json()) as { display_name?: string };
        if (body.display_name) {
          name = body.display_name;
        }
      }
    } catch {
      name = fallback;
    }
    placeName = name;
    overlay.geoDraft = { lat, lng, name };
  }
</script>

<div>
  <div id="osm-map" data-testid="geo-map" {@attach osmMap}></div>
  <p style="margin: 8px 0 0;">{placeName || locale.t('geo_place')}</p>
</div>

<style>
  #osm-map {
    height: 240px;
    background: #e8e8e8;
  }
</style>
