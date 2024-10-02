export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: '李炳然',
    avatar: '',
    username: 'bingran-li',
    title: '查拉图斯特拉(Zarathustra)',
    desc: '专注于科学、技术的学习、创造与实践',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/bingran-li' },
    ],
    nameAliases: ['bingranli', 'bingran-li', 'Zarathustra', '查氏的金蛇', 'bingran li'],
    emailAliases: ['noch_zarathustra@outlook.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
