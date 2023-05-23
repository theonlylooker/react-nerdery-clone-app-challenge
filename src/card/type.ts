type Place = "cabins" | "department" | "caves" | "mini" | "dome" | "farm";

export interface place {
  ownerId: string;
  placeId: string;
  type: Place;
  image: string;
  iconUser: string;
  city: string;
  country: string;
  description: string;
  priceDay: number;
  wished: boolean;
  rating: number;
  //
  //main features array objeto{ type:, text:  }
  //type features array objeto{ type:, text:  }
  /*
   nombre
   reseñas
   calificacion
   años anfitriando
   array objetos information{
   {
    type: estudio
    text: lo que estudio
   },
  }
   */
  /*
  another feature{
    {
      type:
      text:
    }
  }
   */
}
export type Card = Omit<place, "type">;
