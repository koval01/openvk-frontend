import { type FaqItem, type Localized, p, ul } from './blocks';

const FAQ_RU: FaqItem[] = [
  {
    title: 'Для кого этот сайт?',
    blocks: [
      p('Сайт нужен, чтобы найти друзей и знакомых и посмотреть страницу человека — как справочник, а не как лента коротких статусов. Здесь же можно остаться тем, кому ближе ВКонтакте 2007 года.'),
    ],
  },
  {
    title: 'Чем это отличается от современного ВКонтакте?',
    blocks: [
      p('Стена — гостевая книга на странице, а не микроблог. Запись открывается по адресу /wall{владелец}_{номер}. Нет тематических оформлений, кабинета администратора и кабинета поддержки: 2007 год — это сам сайт.'),
    ],
  },
  {
    title: 'Как зарегистрироваться?',
    blocks: [
      p([
        'Откройте ',
        { href: '/login?act=register', text: 'регистрацию' },
        ', придумайте логин и пароль и согласитесь с ',
        { href: '/terms', text: 'правилами' },
        ' и ',
        { href: '/privacy', text: 'политикой конфиденциальности' },
        '. На демо-инстанции можно войти как id1, anna или pavel с паролем openvk.',
      ]),
    ],
  },
  {
    title: 'Где стена и новости?',
    blocks: [
      p('Стена живёт на странице человека. Новости (/feed) показывают записи со стен друзей, а не отдельную ленту микроблога.'),
    ],
  },
  {
    title: 'Как сменить язык и оформление?',
    blocks: [
      p([
        'Язык выбирается в подвале или на странице ',
        { href: '/language', text: '«все языки»' },
        '. Обычная и ночная темы переключаются в настройках. Ночная тема — настоящий чёрный, а не тёмно-синяя заливка.',
      ]),
    ],
  },
  {
    title: 'Как пригласить друзей?',
    blocks: [
      p([
        'После входа откройте ',
        { href: '/invite', text: '«Пригласить»' },
        ' в шапке и отправьте личную ссылку. По ней человек попадёт на регистрацию.',
      ]),
    ],
  },
  {
    title: 'Куда писать, если что-то сломалось?',
    blocks: [
      p('Кабинета поддержки на этой инстанции нет. Сначала посмотрите эту страницу, правила и блог. Если ошибка на демо, опишите её тем, кто поднимает инстанцию.'),
    ],
  },
];

const FAQ_EN: FaqItem[] = [
  {
    title: 'Who is this site for?',
    blocks: [
      p('It is a directory of people and a 2007 VKontakte page: find friends, open a profile, leave a guestbook note. It is also for anyone who wants that older site back.'),
    ],
  },
  {
    title: 'How is this different from modern VKontakte?',
    blocks: [
      p('The wall is a guestbook on the profile, not a microblog. A post lives at /wall{owner}_{local}. There are no themepacks, no admin desk, and no support tickets. 2007 is the site.'),
    ],
  },
  {
    title: 'How do I register?',
    blocks: [
      p([
        'Open ',
        { href: '/login?act=register', text: 'registration' },
        ', pick a login and password, and accept the ',
        { href: '/terms', text: 'rules' },
        ' and ',
        { href: '/privacy', text: 'privacy policy' },
        '. On the demo instance you can sign in as id1, anna, or pavel with the password openvk.',
      ]),
    ],
  },
  {
    title: 'Where are the wall and news?',
    blocks: [
      p('The wall lives on a person’s page. News (/feed) shows wall notes from friends, not a separate microblog.'),
    ],
  },
  {
    title: 'How do I change language and appearance?',
    blocks: [
      p([
        'Pick a language in the footer or on ',
        { href: '/language', text: 'all languages' },
        '. Default and night themes are in settings. Night is true black, not a navy wash.',
      ]),
    ],
  },
  {
    title: 'How do I invite friends?',
    blocks: [
      p([
        'After you sign in, open ',
        { href: '/invite', text: 'Invite' },
        ' in the header and send your personal link. It leads to registration.',
      ]),
    ],
  },
  {
    title: 'Where do I write if something is broken?',
    blocks: [
      p('There is no support desk on this instance. Read this page, the rules, and the blog first. For a demo bug, tell whoever runs the instance.'),
    ],
  },
];

const FAQ: Localized<FaqItem[]> = { ru: FAQ_RU, en: FAQ_EN };

export function faqItems(code: string): FaqItem[] {
  return code.startsWith('en') && FAQ.en ? FAQ.en : FAQ.ru;
}
