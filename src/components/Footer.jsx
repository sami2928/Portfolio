import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Sami Ul Haq</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://web.whatsapp.com" target='_blank'><FaWhatsapp/></a>
                <a href="https://www.linkedin.com/in/sami-ul-haq-a32741214/" target='_blank'><FaLinkedin/></a>
                <a href="https://x.com/SamiUlH31944468?t=LvyvXK9MKcgVytSsqqUaLg&s=08" target='_blank'><FaTwitter/></a>
                <a href="https://www.instagram.com/samiulhaq307?utm_source=qr&igsh=MTZkdW5ia2diZGpsYw==" target='_blank'><FaInstagram/></a>
                <a href="https://www.facebook.com/profile.php?id=100017736079297" target='_blank'><FaFacebook/></a>
            </div>
        </div>
        <p className='text-gray-400'>@2024 Sami Ul Haq</p>
    </div>
  )
}

export default Footer