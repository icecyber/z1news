import Script from 'next/script';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Langauge } from '../Types/Layout';
import LogoAds from './home/LogoAds';

const Layout = ({
  flag,
  socialmedia,
  contactinfo,
  logo,
  logoads,
  children,
}: any) => {
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
        <div></div>
        <main className="max-w-screen-xl mx-auto">{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
};

export default Layout;
