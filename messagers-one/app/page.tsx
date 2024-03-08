import Image from 'next/image';
import AuthForm from './components/AuthForm';

export default function Home() {
    return (
      <div 
      className="flex min-h-full flex-col justify-center py-12  sm:px-6 lg:px-8 bg-grap-100
      "
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img 
          alt="logo"  
          height={8}
          width={8} 
          className='mx-auto w-auto'
          src="/images/logo.jpg" 
          />
          <h2 className='mt-6 text-center text-3xl text-bole tracking-tight text-gray-900
          '>
            Sign in to your account
          </h2>
        </div>
        <AuthForm 

        />
      </div>
    );
}