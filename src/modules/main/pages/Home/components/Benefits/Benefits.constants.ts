import delivery from 'assets/icons/delivery.svg';
import drill from 'assets/icons/drill.svg';
import lift from 'assets/icons/lift.svg';
import project from 'assets/icons/project.svg';
import support from 'assets/icons/support.svg';
import tape from 'assets/icons/tape.svg';

import type { IBenefit } from './Benefits.types';

export const BENEFITS: IBenefit[] = [
  {
    icon: support,
    title: 'Бесплатная',
    subtitle: 'консультация',
  },
  {
    icon: tape,
    title: 'Бесплатный',
    subtitle: 'выезд замерщика',
  },
  {
    icon: project,
    title: 'Бесплатный',
    subtitle: 'дизайн-проект',
  },
  {
    icon: delivery,
    title: 'Бесплатная',
    subtitle: 'доставка',
  },
  {
    icon: lift,
    title: 'Бесплатный',
    subtitle: 'подъём',
  },
  {
    icon: drill,
    title: 'Бесплатная',
    subtitle: 'сборка',
  },
];
