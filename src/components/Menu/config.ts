import { MenuEntry } from '@pancakeswap-libs/uikit'


const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Contracts / Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'SOLID Contract',
        href: 'https://bscscan.com/address/0x643b6ef6306417a0b3fa2813eb5baf30f5dd8736',
      },
      {
        label: 'SOLID Chart',
        href: 'https://poocoin.app/tokens/0x643b6ef6306417a0b3fa2813eb5baf30f5dd8736',
      },
      {
        label: 'xSOLID Contract',
        href: 'https://bscscan.com/address/0x2F0D21f1B84F03fB9D60004fc206C86Be6902a32',
      },
      {
        label: 'xSOLID Chart',
        href: 'https://poocoin.app/tokens/0x2F0D21f1B84F03fB9D60004fc206C86Be6902a32',
      },
    ],
  },
  {
    label: 'Learn More',
    icon: 'RoadmapIcon',
    items: [
      {
        label: 'Blog',
        href: 'https://knightsoftheroundtable-bsc.medium.com/',
      },
    ],
  },
]

export default config
