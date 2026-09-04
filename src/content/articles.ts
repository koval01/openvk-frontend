import { type Article, type Localized, h, ol, p, ul } from './blocks';

const RULES_RU: Article = {
  slug: 'rules',
  heading: 'Правила',
  blocks: [
    p('Администрация сайта разрешает вам пользоваться сайтом на условиях, которые определены в этих правилах.'),
    p('Делать можно всё то, что не относится к запрещённым действиям. К запрещённым действиям относятся:'),
    ol([
      'Отказ от подчинения правилам или их игнорирование.',
      'Отказ от своевременного исполнения запросов администрации.',
      'Использование чужих страниц без разрешения владельца.',
      {
        text: 'Выдача себя за других людей для получения выгоды. Исключения:',
        children: [
          'Человек разрешил использование своей личности.',
          'Человек является оригинальным персонажем, принадлежащим вам.',
        ],
      },
      'Создание массовых рассылок любым способом.',
      'Создание ситуаций, мешающих работе сайта.',
      {
        text: 'Публикация и хранение любого содержимого, которое:',
        children: [
          'Является незаконным в вашей стране проживания.',
          'Содержит порнографические сцены с участием лиц младше 18 лет.',
          'Содержит рекламу запрещённых препаратов или инструкции по их приготовлению.',
          'Содержит информацию, запрещённую в вашей стране проживания.',
          'Содержит сцены бесчеловечного обращения с людьми или животными.',
          'Нарушает авторские и смежные права.',
          'Нарушает права человека.',
          'Мешает пользователям исполнять правила или нормально пользоваться сайтом.',
        ],
      },
    ]),
    p('Администрация является высшим органом власти и может принимать решения в спорных ситуациях, не описанных в правилах.'),
    p('Администрация может выдать наказание, если пользователи:'),
    ol([
      'Публикуют запрещённый контент на страницах других пользователей.',
      'Обманывают администрацию.',
      'Вводят в заблуждение пользователей сайта.',
      'Публично критикуют проект или администрацию с целью унизить или оскорбить участников.',
      'Не уважают администрацию проекта.',
    ]),
    p('При нарушении правил администрация может:'),
    ol([
      'Проигнорировать незначительное нарушение.',
      'Вынести предупреждение.',
      'Выдать временную или постоянную блокировку.',
      'Запретить в будущем пользоваться этим сайтом.',
      'Удалить аккаунт или запрещённый контент.',
    ]),
    p('Администрация может выдавать наказания без объяснения причины.'),
  ],
};

const RULES_EN: Article = {
  slug: 'rules',
  heading: 'Rules',
  blocks: [
    p('The site administration lets you use this site under the conditions below.'),
    p('Anything that is not listed as forbidden is allowed. Forbidden actions include:'),
    ol([
      'Refusing to follow the rules or ignoring them.',
      'Refusing to answer administration requests in time.',
      'Using someone else’s page without the owner’s permission.',
      {
        text: 'Impersonating other people for gain, except when:',
        children: [
          'That person allowed you to use their likeness.',
          'The person is an original character that belongs to you.',
        ],
      },
      'Sending mass messages by any means.',
      'Doing anything that interferes with the site.',
      {
        text: 'Publishing or storing content that:',
        children: [
          'Is illegal in your country of residence.',
          'Contains pornographic scenes involving anyone under 18.',
          'Advertises banned substances or how to make them.',
          'Contains information banned in your country of residence.',
          'Shows inhumane treatment of people or animals.',
          'Infringes copyright or related rights.',
          'Violates human rights.',
          'Stops other people from following the rules or using the site.',
        ],
      },
    ]),
    p('The administration is the highest authority and may decide cases that these rules do not describe.'),
    p('The administration may punish users who:'),
    ol([
      'Post forbidden content on other people’s pages.',
      'Deceive the administration.',
      'Mislead other users.',
      'Publicly attack the project or the administration in order to insult people.',
      'Disrespect the administration.',
    ]),
    p('If the rules are broken, the administration may:'),
    ol([
      'Ignore a minor violation.',
      'Issue a warning.',
      'Issue a temporary or permanent ban.',
      'Forbid future use of the site.',
      'Delete an account or the forbidden content.',
    ]),
    p('The administration may issue a punishment without explaining the reason.'),
  ],
};

const PRIVACY_RU: Article = {
  slug: 'privacy',
  heading: 'Политика конфиденциальности',
  blocks: [
    h('Какую информацию мы собираем?'),
    ul([
      'Основная информация: при регистрации вас могут попросить ввести имя, фамилию, адрес электронной почты и пароль. Вы можете добавить псевдоним, статус, биографию и интересы. Имя, фамилия, псевдоним, статус и фотография профиля общедоступны.',
      'Записи, личные сообщения и другая информация обрабатываются и хранятся на сервере. С записью сохраняются дата, время и вложения. Записи на стене общедоступны. Личные сообщения видят только те, кому вы их отправили. Не делитесь вредоносной информацией.',
      'IP-адреса и другие метаданные: при входе мы можем записать IP-адрес и название браузера. Журналы сервера могут содержать IP-адрес каждого запроса.',
    ]),
    h('Для чего мы используем вашу информацию?'),
    ul([
      'Чтобы предоставить базовый функционал сайта. Чужой контент и своя стена доступны только после входа.',
      'Чтобы помочь модерации: например, сравнить IP-адрес с известными адресами при обходе блокировки.',
      'Адрес электронной почты может быть использован для восстановления доступа.',
    ]),
    h('Как мы защищаем вашу информацию?'),
    p('Сессия браузера и трафик между приложениями и API защищены протоколом TLS. Пароль хранится как односторонний хеш. Поля профиля, которые нельзя показывать всем, шифруются на сервере.'),
    h('Используем ли мы файлы cookies?'),
    p('Да. Cookies позволяют узнать ваш браузер и связать его с учётной записью, а также сохранить язык и оформление.'),
    h('Раскрываем ли мы информацию сторонним лицам?'),
    p('Мы не продаём и не передаём посторонним вашу личную информацию. Это не относится к доверенным лицам, которые помогают обслуживать сайт и обязаны сохранять конфиденциальность. Мы можем раскрыть информацию, если это нужно по закону или для защиты прав пользователей.'),
    h('Изменения'),
    p('Если политика изменится, мы опубликуем новую редакцию на этой странице.'),
    p('Документ адаптирован из политики OpenVK и в последний раз обновлялся 4 сентября 2026 года.'),
  ],
};

const PRIVACY_EN: Article = {
  slug: 'privacy',
  heading: 'Privacy policy',
  blocks: [
    h('What information do we collect?'),
    ul([
      'Basic information: registration may ask for a first name, last name, email, and password. You may add a nickname, status, bio, and interests. Name, nickname, status, and profile photo are public.',
      'Wall notes, messages, and other content are stored on the server with a timestamp and attachments. Wall notes are public. Messages go only to the people you write to. Do not share harmful material.',
      'IP addresses and other metadata: a sign-in may record the IP address and browser name. Server logs may include the IP address of each request.',
    ]),
    h('How do we use this information?'),
    ul([
      'To provide the site. Other people’s content and your own wall are available after you sign in.',
      'To help moderation, for example by comparing IP addresses when someone evades a ban.',
      'Your email may be used to restore access.',
    ]),
    h('How do we protect it?'),
    p('The browser session and API traffic are protected with TLS. Passwords are stored as a one-way hash. Profile fields that are not meant for everyone are encrypted on the server.'),
    h('Do we use cookies?'),
    p('Yes. Cookies identify your browser, attach it to your account, and remember language and appearance.'),
    h('Do we share information with third parties?'),
    p('We do not sell or trade your personal information. Trusted operators who help run the site must keep it confidential. We may disclose information when the law requires it or to protect users’ rights.'),
    h('Changes'),
    p('If this policy changes, the new text will appear on this page.'),
    p('Adapted from the OpenVK privacy policy. Last updated 4 September 2026.'),
  ],
};

const DONATE_RU: Article = {
  slug: 'donate',
  heading: 'Пожертвовать',
  blocks: [
    p('Эта инстанция не принимает пожертвования и не продаёт монеты, ваучеры или значки.'),
    p([
      'Если вы хотите поддержать исходный проект OpenVK, смотрите ',
      { href: 'https://github.com/OpenVK/openvk', text: 'репозиторий OpenVK' },
      '.',
    ]),
  ],
};

const DONATE_EN: Article = {
  slug: 'donate',
  heading: 'Donate',
  blocks: [
    p('This instance does not take donations and does not sell coins, vouchers, or badges.'),
    p([
      'If you want to support upstream OpenVK, see the ',
      { href: 'https://github.com/OpenVK/openvk', text: 'OpenVK repository' },
      '.',
    ]),
  ],
};

const ARTICLES: Record<string, Localized<Article>> = {
  rules: { ru: RULES_RU, en: RULES_EN },
  privacy: { ru: PRIVACY_RU, en: PRIVACY_EN },
  donate: { ru: DONATE_RU, en: DONATE_EN },
};

const SLUG_ALIASES: Record<string, string> = {
  terms: 'rules',
  rules: 'rules',
  privacy: 'privacy',
  donate: 'donate',
};

export function articleSlug(name: string): string | undefined {
  return SLUG_ALIASES[name];
}

export function getArticle(name: string, code: string): Article | undefined {
  const slug = articleSlug(name);
  if (!slug) {
    return undefined;
  }
  const localized = ARTICLES[slug];
  return localized ? (code.startsWith('en') && localized.en ? localized.en : localized.ru) : undefined;
}
