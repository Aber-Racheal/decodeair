import { Country } from '@/types/country'

export const countries: Country[] = [
  {
    name: 'Uganda',
    fullName: 'Republic of Uganda',
    code: 'UG',
    codes: ['UGA', '800'],
    currency: 'Ugandan Shilling',
    demonym: 'Ugandan',
    language: 'English',
    capital: 'Kampala',
    callingCode: '+256',
    region: 'Africa',
    subregion: 'Eastern Africa',
    flag: '🇺🇬',
    flagUrl: 'https://flagcdn.com/w320/ug.png'
  },
  {
    name: 'Kenya',
    fullName: 'Republic of Kenya',
    code: 'KE',
    codes: ['KEN', '404'],
    currency: 'Kenyan Shilling',
    demonym: 'Kenyan',
    language: 'Swahili / English',
    capital: 'Nairobi',
    callingCode: '+254',
    region: 'Africa',
    subregion: 'Eastern Africa',
    flag: '🇰🇪',
    flagUrl: 'https://flagcdn.com/w320/ke.png'
  }
  // Add more...
]
