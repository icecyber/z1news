import Link from 'next/link';
import React from 'react';
import FooterHeading from './FooterHeading';

const FooterContact = ({ contactinfo }: any) => {
  return (
    <div>
      <FooterHeading title="ទំនាក់ទំនង" />
      <div className="">
        <h1 className="text-lg font-bold text-[#d4d4d4]">អាសយដ្ឋាន</h1>
        <ul className="text-[#d4d4d4]">
          {contactinfo.children.map((contact: any) => (
            <li key={contact.id}>
              <Link href={`${contact.template.custom_icon.text}`}>
                <span>
                  <i
                    className={`${contact.template.custom_icon.icon} mr-1`}
                  ></i>
                  {contact.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterContact;
