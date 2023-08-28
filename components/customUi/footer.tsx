'use client';

const footerLinks = [
  { 'About Us': ['About', 'Contact'] },
  { Help: ['FAQ', 'Privacy Policy', 'Terms & Conditions'] },
  { Connect: ['Facebook', 'Instagram', 'Linkedin', 'Tiktok', 'Whatsapp'] },
];

const Footer = () => {
  return (
    <div className='fixed bottom-0 min-h-fit w-full space-y-4 divide-y bg-gray-700 px-4'>
      <section className='flex justify-around'>
        {footerLinks.map((item, index) => (
          <div key={index} className='mt-4'>
            {Object.entries(item).map(([title, links]) => {
              return (
                <div key={title} className='mr-4 space-y-2'>
                  <h3 className='text-base font-bold text-white'>{title}</h3>
                  <div>
                    {links.map((link: string) => (
                      <p key={link} className='text-sm text-gray-300'>
                        {link}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </section>
      <section className=' flex h-8 items-center justify-center gap-1'>
        <p className='text-xs text-white'>
          @2023 Copyright Shadecn-Next Designed By
        </p>
        <span className='text-xs text-blue-500 underline'>DB Gautam</span>
      </section>
    </div>
  );
};
export default Footer;
