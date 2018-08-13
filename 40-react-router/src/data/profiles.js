import uuid from 'uuid';

const catfiles = [
  {
    id: uuid(),
    name: 'Sugar',
    description: 'A clingy male cat who meowplains a lot.',
    avatar: 'Sugar_640x640.png',
  },
  {
    id: uuid(),
    name: 'Cinnamon',
    description: 'A possesive female cat who loves belly rubs.',
    avatar: 'Cinnamon_640x640.png',
  },
  {
    id: uuid(),
    name: 'Garfield',
    description: 'Fat, orange cat. Loves lasagna. Hates Mondays.',
    avatar: 'Garfield.png',
  },
  {
    id: uuid(),
    name: 'Hello Kitty',
    description: `Hello Kitty is not a cat. She's a cartoon character. She is a little girl. She is a friend. But she is not a cat. She does have a pet cat of her own, however, and it's called Charmmy Kitty.`,
    avatar: 'Hello_Kitty.png',
  },
];

export default catfiles;
