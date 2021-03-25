import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Trips"
        description="All about my last trips"
        canonical="https://trips.brunocampos.co"
        openGraph={{
          url: 'https://trips.brunocampos.co',
          title: 'Trips',
          description: 'All about my last trips',
          images: [
            {
              url: 'https://trips.brunocampos.co/img/cover.jpg',
              width: 350,
              height: 400,
              alt: 'Trips'
            }
          ],
          site_name: 'Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
