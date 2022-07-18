import Image from 'next/image';
import Layout from '@components/Layout/Layout';
import avatar from '@images/avatar-senora-patricia.png';
import Card from '@components/atoms/Card';
import { HomeStats } from '@components/molecules/Stats';

export default function Index() {

  const flex = {
    display: 'flex',
    gap: '1em',
    justifyContent: 'center'
  };
  return (
    <div>

      <div>CD Valparaiso: Blanco 1120, Valparaiso, Chile</div>

      <div style={flex}>
        <Image src={avatar} alt='avatar' />
        <div>
          <h5>¡Hola Margarita!</h5>
          <p>Este es tu dashboard</p>
        </div>
      </div>

      <Card>
        <HomeStats osTotal={80} offRouteOsTotal={8549}/>
      </Card>

      <Card>
        <h5 style={{textAlign: 'center'}}>¿Qué te gustaría hacer ahora?</h5>
      </Card>

    </div>
  );
}

Index.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};
