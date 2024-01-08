import Image from "next/image";

const Footer = () => {
  return (
    <section className="max-container flex w-full flex-col items-center gap-5 px-14">
      <Image
        src="/assets/icons/logo-white.png"
        alt="Picture of nathaniel aidoo"
        width={140}
        height={140}
      />
      <div className="text-base font-normal">
        <p>© 2024. All rights reserved by Portfolio - BraNat.</p>
      </div>
    </section>
  );
};

export default Footer;
