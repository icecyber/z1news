import Script from 'next/script';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Langauge } from '../Types/Layout';
import LogoAds from './home/LogoAds';
import LastNewsTextComp from './home/LastNewsTextComp';
import FooterLastNewsComp from './footer/FooterLastNewsComp';
import { url } from 'inspector';
import FooterAboutComp from './footer/FooterAboutComp';
import FooterSocialMedia from './footer/FooterSocialMedia';
import FooterContact from './footer/FooterContact';

const Layout = ({
  flag,
  socialmedia,
  contactinfo,
  logo,
  logoads,
  children,
  menu,
  lastposts,
  footerbg,
  about,
}: any) => {
  const [isMenu, setIsMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  return (
    <>
      <Head>
        <title>Z1 News</title>
        <meta
          name="description"
          content="Z1 news is media website collect all real estate news in Cambodia."
        />
        <link rel="icon" href="/favicon.ico" />

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
      </Head>
      {/* Facebook Script */}
      <div id="fb-root"></div>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0&appId=895609560585154&autoLogAppEvents=1"
        nonce="CNATzMX5"
      />
      <div>
        {/* TopNav */}
        <div className="bg-hightlightColor overflow-x-auto">
          <div className="w-full container mx-auto text-[#D4D2C9] flex justify-between">
            {/* Langauge */}
            <div className="flex items-center border-gray-700 border-l">
              <div className="dropdown">
                {/* Flag Button */}
                {flag.children.slice(0, 1).map((lang: Langauge) => (
                  <button
                    key={lang.id}
                    className=" flex items-center gap-1 text-sm px-[15px]"
                    type="button"
                  >
                    <div className="w-5 h-3 relative">
                      <Image
                        src={lang.featuredImage.sourceUrl}
                        alt={lang.title}
                        fill
                        sizes="(max-width: 20px)"
                      />
                    </div>
                    {lang.title}
                    <i className="fa-sharp fa-solid fa-xs fa-caret-down ml-1 pr-4"></i>
                  </button>
                ))}
                {/* DropDown Menu Hidden by deafult */}
                <ul className="dropdown-menu hidden absolute z-10 bg-[#343A40] w-[160px] h-[98px] rounded-[4px] top-11 py-[10px] ">
                  {flag.children.map((lang: Langauge) => (
                    <Link
                      key={lang.id}
                      className="flex items-center gap-1 text-sm px-[15px] leading-10 hover:bg-[#52575C] "
                      href={lang.custompage_externallink.externalLink}
                    >
                      <div className="relative w-5 h-3">
                        <Image
                          src={lang.featuredImage.sourceUrl}
                          alt={lang.title}
                          fill
                          sizes="(max-width: 20px)"
                        ></Image>
                      </div>
                      {lang.title}
                    </Link>
                  ))}
                </ul>
              </div>
              {/* Social Media */}
              <div>
                <ul className=" flex">
                  {socialmedia.children.map((social: any) => (
                    <Link href={social.custom_icon.link} key={social.id}>
                      <li
                        className={`px-[15px] h-[40px] flex items-center border-gray-700 border-l`}
                        onMouseEnter={(e: any) =>
                          e.target.nodeName == 'LI'
                            ? (e.target.style.backgroundColor = `${social.custom_icon.backgroundColor}`)
                            : (e.target.style.backgroundColor = ``)
                        }
                        onMouseLeave={(e: any) =>
                          e.target.nodeName == 'LI'
                            ? (e.target.style.backgroundColor = ``)
                            : (e.target.style.backgroundColor = ``)
                        }
                      >
                        <i className={`${social.custom_icon.icon}`}></i>
                      </li>
                    </Link>
                  ))}
                  <li className="flex items-center mt-2">
                    <div
                      className="fb-like"
                      data-href="https://www.facebook.com/Z1newsnetwork/"
                      data-width=""
                      data-layout="button_count"
                      data-action="like"
                      data-size="small"
                      data-share="true"
                    ></div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Contact Info */}
            <div className="contact-info flex items-center text-sm whitespace-nowrap">
              <ul className="flex">
                {contactinfo.children.slice(1).map((contact: any) => (
                  <li
                    key={contact.id}
                    className="border-gray-700 border-l h-10 flex items-center px-[15px] hover:text-white"
                  >
                    <Link href={contact.template.custom_icon.text}>
                      <i
                        className={`${contact.template.custom_icon.icon} mr-2`}
                      ></i>
                      {contact.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Logo and Logo Ads */}
        <div className="grid grid-cols-12 container mx-auto px-3 py-4 gap-4 md:gap-10">
          <div className="col-span-4 min-w-[101px] h-7 sm:h-12 md:h-16 lg:h-28 xl:h- 2xl:h-[856px] relative ">
            <Image
              src={logo.featuredImage.sourceUrl}
              alt={logo.featuredImage.altText}
              fill
              className="object-contain"
              sizes="(max-width: 416px)"
              priority
            ></Image>
          </div>
          {/* Ads Banner */}
          <div className="col-span-8 relative">
            <LogoAds banner={logoads} />
          </div>
        </div>
        {/* Menu */}
        <div className="bg-primaryColor">
          <div className="bg-primaryColor flex justify-between items-center px-4 relative container mx-auto w-full">
            {/* Menu Mobile */}
            <div className="flex items-center lg:hidden">
              <button
                className="bg-secondaryColor"
                onClick={() => setIsMenu(!isMenu)}
              >
                {isMenu ? (
                  <i className="fa-solid fa-x text-white py-2 px-4 text-xl"></i>
                ) : (
                  <i className="fa-solid fa-bars text-white py-2 px-4 text-xl"></i>
                )}
              </button>
              <h1 className="text-white text-xl font-medium  py-2 px-4">
                Z1 News
              </h1>
            </div>
            {/* Big Menu */}
            <div className="hidden lg:block ">
              <ul className="flex ">
                {menu.map((item: any) => (
                  <Link href={item.uri} key={item.id}>
                    <li className="text-white text-base leading-[50px] px-5 hover:bg-secondaryColor cursor-pointer">
                      {item.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <button>
              <i className="fa-solid fa-magnifying-glass text-white text-xl py-2 px-4"></i>
            </button>
            {/* Menu Items Darwer*/}
            {isMenu ? (
              <div className="bg-primaryColor absolute bottom-[-250px] w-full left-0 animate__animated animate__bounce">
                <ul>
                  {menu.map((item: any) => (
                    <li
                      key={item.id}
                      className="text-white text-base leading-[50px] px-5 hover:bg-secondaryColor cursor-pointer"
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {/* Search Drawer */}
            {isSearch ? (
              <div className="absolute right-0">
                <input type="text" placeholder="ស្វែងរកពាក្យ..." />
              </div>
            ) : null}
          </div>
        </div>
        {/* LastNews Slider */}
        <div className="px-3 container mx-auto">
          <LastNewsTextComp lastposts={lastposts} />
        </div>
        <main className="max-w-screen-xl mx-auto ">{children}</main>
        <footer
          style={{
            background: 'url(' + `${footerbg.featuredImage.sourceUrl} ` + ')',
            backgroundBlendMode: 'color',
            backgroundColor: 'rgb(47 43 90 / 90%)',
          }}
        >
          <div className="container mx-auto px-3 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 lg:gap-3">
            <FooterLastNewsComp lastnews={lastposts} />
            <FooterAboutComp about={about} />
            <FooterSocialMedia socialmedia={socialmedia} />
            <FooterContact contactinfo={contactinfo} />
          </div>
        </footer>
        <div className=" w-full bg-[#212529]">
          <div className="container mx-auto md:flex">
            <div className=" text-[#d4d4d4] text-center md:text-left py-3 px-4 w-full">
              <p>រក្សា​សិទ្ធិ​គ្រប់​យ៉ាង​ដោយ Z1 News ឆ្នាំ2023.</p>
            </div>
            <div className=" text-[#d4d4d4] text-center  flex gap-2 justify-center md:justify-end py-3 px-4 w-full">
              <span>លក្ខខណ្ឌ</span>
              <span>|</span>
              <span>គោលការណ៏ភាពឯកជន</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
