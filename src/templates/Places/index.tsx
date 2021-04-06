import { NextSeo } from 'next-seo'

import Image from 'next/image'
import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as Styles from './styles'
import { useRouter } from 'next/dist/client/router'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={place.description?.text || ''}
        canonical="https://mytrips.andreyoliveira.com.br"
        openGraph={{
          url: 'https://mytrips.andreyoliveira.com.br',
          title: `${place.name} - My Trips`,
          description: place.description?.text || '',
          site_name: 'My Trips',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <Styles.Wrapper>
        <Styles.Container>
          <Styles.Heading>{place.name}</Styles.Heading>

          <Styles.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <Styles.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`Photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
                objectFit={`fill`}
              />
            ))}
          </Styles.Gallery>
        </Styles.Container>
      </Styles.Wrapper>
    </>
  )
}
