import { MAP_API } from "@/constants/API"
import Map, {
  Source,
  Layer,
  Marker,
  NavigationControl,
  Popup
  // ScaleControl,
  // useControl,
  // AttributionControl
} from "react-map-gl"
import type { CircleLayer } from "react-map-gl"
import type { FeatureCollection } from "geojson"
import { useState } from "react"
import MapPin from "../atoms/MapPin"

const geojson: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Hạ Long Bay",
        description:
          "Hạ Long Bay is a UNESCO World Heritage Site and popular tourist destination known for its emerald waters and thousands of towering limestone islands topped with rainforests."
      },
      geometry: {
        type: "Point",
        coordinates: [107.0475, 20.9101]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Huế Imperial City",
        description:
          "Huế Imperial City is a UNESCO World Heritage Site and former capital of Vietnam. It features a walled fortress and palace complex dating back to the Nguyen Dynasty."
      },
      geometry: {
        type: "Point",
        coordinates: [107.5949, 16.4637]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Hội An Ancient Town",
        description:
          "Hội An Ancient Town is a UNESCO World Heritage Site known for its well-preserved architecture, narrow streets, and colorful lanterns. It's a popular destination for cultural and culinary experiences."
      },
      geometry: {
        type: "Point",
        coordinates: [108.3271, 15.8801]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Sơn Đoòng Cave",
        description:
          "Sơn Đoòng Cave is one of the world's largest natural caves, located in Phong Nha-Kẻ Bàng National Park. It features gigantic stalactites and stalagmites, underground rivers, and unique biodiversity."
      },
      geometry: {
        type: "Point",
        coordinates: [106.2874, 17.4438]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Mỹ Sơn Sanctuary",
        description:
          "Mỹ Sơn Sanctuary is a UNESCO World Heritage Site containing ancient Hindu temple ruins built by the Champa Kingdom between the 4th and 14th centuries. It's a significant archaeological site in Vietnam."
      },
      geometry: {
        type: "Point",
        coordinates: [108.6943, 15.7649]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Phong Nha-Kẻ Bàng National Park",
        description:
          "Phong Nha-Kẻ Bàng National Park is a UNESCO World Heritage Site renowned for its karst landscapes, caves, and underground rivers. It's home to Sơn Đoòng Cave, the world's largest cave."
      },
      geometry: {
        type: "Point",
        coordinates: [106.2901, 17.59]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Đà Nẵng",
        description:
          "Đà Nẵng is a coastal city known for its sandy beaches, Marble Mountains, and Dragon Bridge. It's a popular tourist destination offering a mix of cultural, historical, and natural attractions."
      },
      geometry: {
        type: "Point",
        coordinates: [108.2241, 16.0544]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Sapa",
        description:
          "Sapa is a town in the northern mountains of Vietnam, known for its stunning terraced rice fields, ethnic minority villages, and trekking opportunities. It offers breathtaking views of the surrounding landscapes."
      },
      geometry: {
        type: "Point",
        coordinates: [103.844, 22.3333]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Hồ Chí Minh City (Saigon)",
        description:
          "Hồ Chí Minh City, formerly known as Saigon, is the largest city in Vietnam and a bustling metropolis with a mix of modern skyscrapers, French colonial architecture, and vibrant street markets."
      },
      geometry: {
        type: "Point",
        coordinates: [106.6297, 10.8231]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Nha Trang",
        description:
          "Nha Trang is a coastal resort city known for its pristine beaches, clear turquoise waters, and vibrant nightlife. It's a popular destination for beachgoers, water sports enthusiasts, and relaxation."
      },
      geometry: {
        type: "Point",
        coordinates: [109.1967, 12.2388]
      }
    }
  ]
}

const MapCustom = () => {
  const layerStyle: CircleLayer = {
    id: "point",
    type: "circle",
    paint: {
      "circle-radius": 10,
      "circle-color": "#007cbf"
    }
  }
  const [showPopup, setShowPopup] = useState<boolean>(true)
  return (
    <Map
      mapboxAccessToken={MAP_API}
      initialViewState={{
        longitude: 109.1967,
        latitude: 12.2388,
        zoom: 6
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/hieutt123/clv6bidn4003u01qz0b2q0me4"
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
      <Marker longitude={-100} latitude={40} anchor="bottom">
        <MapPin />
      </Marker>
      <NavigationControl />
      {showPopup && (
        <Popup longitude={109.1967} latitude={12.2388} anchor="bottom" onClose={() => setShowPopup(false)}>
          You are here
        </Popup>
      )}
    </Map>
  )
}
export default MapCustom

// function DrawControl(props: DrawControlProps) {
//   useControl(() => new MapboxDraw(props), {
//     position: props.position
//   })

//   return null
// }
