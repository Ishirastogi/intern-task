import React from 'react';

const Breadcrumb = () => {
  const breadcrumbItems = [
    { label: 'Services', link: '/services', active: true },
    { label: 'Professional', link: '/professional', active: false },
    { label: 'Time', link: '/time', active: false },
    { label: 'Confirm', link: '/confirm', active: false },
  ];

  return (
    <nav className="flex items-center text-sm text-gray-500">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          <a
            href={item.link}
            className={`${
              item.active ? 'text-black font-medium' : 'text-gray-400'
            } hover:text-black`}
          >
            {item.label}
          </a>
          {index < breadcrumbItems.length - 1 && (
            <span className="mx-2 text-gray-400">{'>'}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
