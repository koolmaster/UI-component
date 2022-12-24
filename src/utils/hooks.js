import { useCallback, useEffect, useRef, useState } from 'react';
import fastdom from 'fastdom';

export function useMounted() {
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return mounted;
}

export function usePonto() {
  const [loaded, setLoaded] = useState(false);
  const pontoRef = useRef();
  const mounted = useMounted();

  useEffect(() => {
    if (window.Ponto && mounted.current) {
      pontoRef.current = window.Ponto;
      setLoaded(true);
      return;
    }

    // prevent duplicate ponto script tag
    let script = document.getElementById('ponto-script');
    if (!script) {
      fastdom.mutate(() => {
        script = document.createElement('script');
        script.id = 'ponto-script';
        script.src = 'https://salt.tikicdn.com/desktop/js/plugins/ponto.js';
        script.type = 'text/javascript';
        document.body.appendChild(script);
      });
    }

    function deferInitPonto() {
      if (!window.Ponto) {
        setTimeout(deferInitPonto, 500);
        return;
      }

      if (mounted.current) {
        pontoRef.current = window.Ponto;
        setLoaded(true);
      }
    }

    deferInitPonto();
  }, [mounted]);

  return [loaded, pontoRef];
}

export const useImageLoaded = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const curImageRef = imageRef.current;
    const handleImageLoaded = () => {
      setImageLoaded(true);
      curImageRef.removeEventListener('load', handleImageLoaded);
    };

    if (curImageRef) {
      curImageRef.addEventListener('load', handleImageLoaded);
      if (curImageRef.complete) {
        handleImageLoaded();
      }
    }
  }, []);

  return {
    imageLoaded,
    imageRef,
  };
};

// get DOM info (bounding rect) of dom element
export const useBoundingClientRect = (allowFastDom = false) => {
  const [boundingRect, setBoundingRect] = useState({});
  const elemRef = useRef();

  const updateBoundingRect = useCallback(() => {
    const element = elemRef.current;
    if (element) {
      if (allowFastDom) {
        fastdom.measure(() => {
          setBoundingRect(element.getBoundingClientRect() || {});
        });
      } else {
        setBoundingRect(element.getBoundingClientRect() || {});
      }
    }
  }, [allowFastDom]);

  useEffect(() => {
    const element = elemRef.current;
    if (element) {
      updateBoundingRect();
      window.addEventListener('resize', updateBoundingRect);
    }

    return () => {
      window.removeEventListener('resize', updateBoundingRect);
    };
  }, [updateBoundingRect]);

  return {
    elemRef,
    boundingRect,
  };
};
