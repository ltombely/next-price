import { Button } from '@/components/ui/button'
import { SignUpButton } from '@clerk/nextjs'
import { ArrowRight, CheckIcon } from 'lucide-react'
import { NeonIcon } from './(marketing)/_icons/Neon'
import { ClerkIcon } from './(marketing)/_icons/Clerk'
import {
  subscriptionTiers,
  subscriptionTiersInOrder
} from '@/constants/subscriptionTier'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { formatCompactNumber, formatPrice } from '@/lib/utils'
import { ReactNode } from 'react'

export default function Home() {
  return (
    <>
      <section className="h-dvh w-full bg-radial-gradient from-rose-400/70 to-background">
        <div className="flex size-full flex-col items-center justify-center gap-8 px-4 text-center">
          <h1 className="m-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Precifique inteligentemente, venda mais!
          </h1>
          <p className="max-w-screen-xl text-lg lg:text-3xl">
            Otimize o preço do seu produto em todos os países para maximizar as
            vendas. Capture 85% do mercado inexplorado com preços dinâmicos
            baseados em localização
          </p>
          <SignUpButton>
            <Button className="flex gap-2 rounded-xl p-6 text-lg">
              Comece Agora Gratuitamente! <ArrowRight className="size-8" />
            </Button>
          </SignUpButton>
        </div>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="container flex flex-col gap-16 px-8 py-16 md:px-16">
          <h2 className="text-balance text-center text-2xl text-primary-foreground">
            Confiado por empresas de ponta
          </h2>
          <div className="grid grid-cols-2 gap-16 md:grid-cols-3 xl:grid-cols-5">
            <NeonIcon />
            <ClerkIcon />
            <NeonIcon />
            <ClerkIcon />
            <NeonIcon />
            <ClerkIcon />
            <NeonIcon />
            <ClerkIcon />
            <NeonIcon />
            <ClerkIcon className="md:max-xl:hidden" />
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-accent/5 px-8 py-16">
        <h2 className="text-center text-4xl">
          {' '}
          Software de preços que se paga 20x mais
        </h2>
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 lg:grid-cols-4">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
    </>
  )
}

const PricingCard = ({
  name,
  priceInCents,
  maxNumberOfVisits,
  maxNumberOfProducts,
  canRemoveBranding,
  canAccessAnalytics,
  canCustomizeBanner
}: (typeof subscriptionTiersInOrder)[number]) => {
  const isMostPopular = name === 'Standard'

  return (
    <Card className="">
      <CardHeader>
        <p className="mb-8 font-semibold text-accent">{name}</p>
        <CardTitle className="text-xl font-bold">
          {formatPrice(priceInCents)} / mês
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            variant={isMostPopular ? 'accent' : 'default'}
            className="w-full rounded-lg"
          >
            Iniciar
          </Button>
        </SignUpButton>
      </CardContent>
    </Card>
  )
}

const Feature = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div>
      <CheckIcon   />
    </div>
  )
}
