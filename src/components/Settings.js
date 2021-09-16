import React from 'react';

const settings = {
  sources: ['local_file_system', 'url'],
  accept: ['image/*'],
  maxFiles: [10, 20, 30],
};

const settingsForm = [];

for (let setting in settings) {
  settingsForm.push(
    <fieldset key={setting}>
      <legend>{setting}</legend>
      {settings[setting].map((item) => (
        <div key={item}>
          <input id={item} type="checkbox" value={item} name={setting} />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
    </fieldset>
  );
}

export default function Settings() {
  return <>{settingsForm}</>;
}
