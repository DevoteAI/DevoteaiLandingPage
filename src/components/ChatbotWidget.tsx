import { useEffect } from 'react';

export default function ChatbotWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = '_MINDOS_STUDIO_WIDGET_';
    script.setAttribute('data-mind-id', '260121026666221568');
    script.src = 'https://widget.mindos.com/script.js';
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('_MINDOS_STUDIO_WIDGET_');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null;
}