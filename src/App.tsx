import React from 'react';
import { Alert, Button, Card, CardBody } from './commons';

function App() {
  return (
    <React.Fragment>
      {/* Alert Component */}
      <Card className='border border-black m-4 p-3'>
        <CardBody>
          <p className='mb-4 font-semibold text-gray-600 dark:text-gray-300'>
            Alert
          </p>

          <p className='text-gray-600 dark:text-gray-400'>
            type: success, danger, warning, info and neutral (default)
          </p>
          <Alert>Lorem ipsum dolor sit</Alert>
          <Alert type='success'>Lorem ipsum dolor sit</Alert>
          <Alert type='danger'>Lorem ipsum dolor sit</Alert>
          <Alert type='warning'>Lorem ipsum dolor sit</Alert>
          <Alert type='info'>Lorem ipsum dolor sit</Alert>
          <Alert type='neutral'>Lorem ipsum dolor sit</Alert>

          <p className='mt-4 text-gray-600 dark:text-gray-400'>onClose</p>
          <Alert type='success' onClose={() => {}}>
            Lorem ipsum
          </Alert>
        </CardBody>
      </Card>

      {/* Button Component */}
      <Card className='border border-black m-4 p-3'>
        <CardBody>
          <p className='mb-4 font-semibold text-gray-600 dark:text-gray-300'>
            Button
          </p>

          <p className='text-gray-600 dark:text-gray-400'>
            size: larger, large, regular (default) and small
          </p>
          <Button size='larger'>Larger</Button>
          <Button size='large'>Large</Button>
          <Button>Regular</Button>
          <Button size='small'>Small</Button>

          <p className='mt-4 text-gray-600 dark:text-gray-400'>
            layout: primary (default), outline and link
          </p>
          <Button>Primary</Button>
          <Button layout='outline'>Outline</Button>
          <Button layout='link'>Link</Button>

          <p className='mt-4 text-gray-600 dark:text-gray-400'>Disabled</p>
          <Button disabled>Primary</Button>
          <Button disabled layout='outline'>
            Outline
          </Button>
          <Button disabled layout='link'>
            Link
          </Button>

          <p className='mt-4 text-gray-600 dark:text-gray-400'>Block</p>
          <Button block>Primary</Button>
          <Button block layout='outline'>
            Outline
          </Button>
          <Button block layout='link'>
            Link
          </Button>

          <p className='mt-4 text-gray-600 dark:text-gray-400'>Tag</p>
          <Button tag='a' href='#'>
            Primary
          </Button>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default App;
