import { useEffect, useState } from "react";

export const useLoadGoogleMaps = (apiKey) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const scriptId = "google-maps-script";
    const scriptExists = document.getElementById(scriptId);

    if (!scriptExists) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        setIsLoaded(true);
      };

      document.body.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, [apiKey]);

  return isLoaded;
};
