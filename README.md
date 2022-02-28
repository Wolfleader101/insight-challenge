[Deployed on Vercel!](https://insight-challenge.vercel.app/)

# SETUP

## Set Environment Variables

create a `.env` have the following variables:

```
NEXT_PUBLIC_MAPBOX=MAPBOX_API_KEY
NEXT_PUBLIC_OPENWEATHER=WEATHER_API_KEY
```

## Run

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# ASSUMPTIONS

- 5 Day forecase starts from the current day
- Tested on the following devices
- Weather data is fetched open weather AI
- Geocoder uses MapboxGL

- Iphone SE (375 x 667)
- Iphone 12 Pro (390 x 844)
- Ipad Air (820 x 1180) (Rotated on its side)
- Desktop (1920 x 1080)

All components are also rendered out in storybook, which you can launch with `yarn storybook`
The main Weather Panel
