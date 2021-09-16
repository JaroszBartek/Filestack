import React from 'react';

export default function Image({ src, alt, thumbnail }) {
  const { origin, pathname } = new URL(src);
  const md = thumbnail ? '300' : '600';
  const lg = thumbnail ? '350' : '600';

  return (
    <div className="relative">
      <picture>
        <source
          srcSet={`${origin}/resize=width:${lg}${pathname}`}
          media="(min-width: 1000px)"
        />
        <source
          srcSet={`${origin}/resize=width:${md}${pathname}`}
          media="(min-width: 500px)"
        />
        <img src={`${origin}/resize=width:300${pathname}`} alt={alt} />
      </picture>
      <div className="absolute inset-0 bg-gray-600 bg-opacity-50 p-2 opacity-0 hover:opacity-100 transition-opacity text-white flex flex-col items-center justify-center font-bold">
        <div className="max-w-full break-words">{alt}</div>
      </div>
    </div>
  );
}
