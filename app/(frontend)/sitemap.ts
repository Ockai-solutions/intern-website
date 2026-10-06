import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://ockai.de',
            lastModified: new Date(),
        },
        {
            url: 'https://ockai.de/ueber-uns',
            lastModified: new Date(),
        },
        {
            url: 'https://ockai.de/kontakt',
            lastModified: new Date(),
        },
        {
            url: 'https://ockai.de/leistungen',
            lastModified: new Date(),
        },
        {
            url: 'https://ockai.de/impressum',
            lastModified: new Date(),
        },
        {
            url: 'https://ockai.de/datenschutz',
            lastModified: new Date(),
        },
    ]
}