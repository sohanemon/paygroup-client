import { Typography } from '@/components/ui/typography';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='container grid items-center grid-cols-1 lg:py-20 md:grid-cols-2 justify-items-center'>
      <div className='max-md:order-last max-md:text-justify'>
        <Typography lg>
          <span className='text-3xl md:text-5xl text-primary'>PayGroup</span> is
          a digital platform that enables <strong>social groups</strong> living
          in different countries, continents to:{' '}
        </Typography>
        <Typography className='mt-10 ml-2 list-disc list-inside'>
          <li>Collect and manage contributions electronically </li>

          <li>Create fundraising campaigns</li>
        </Typography>
      </div>
      <Image src={`/assets/images/phone.png`} alt='' width={400} height={500} />
    </section>
  );
}