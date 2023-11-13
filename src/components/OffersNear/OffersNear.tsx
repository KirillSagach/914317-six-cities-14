import { OffersInNeibourghood } from '../../types/offer';
import OfferList from '../OfferList/OfferList';

type OffersNearProps = {
  offersInNeibourghood: OffersInNeibourghood;
  isNeibourgh: boolean;
  onItemHover: (id: string) => void;
}

function OffersNear({ offersInNeibourghood, isNeibourgh, onItemHover }: OffersNearProps): JSX.Element {
  return (
    <OfferList
      listOffers={offersInNeibourghood}
      isNeibourgh={isNeibourgh}
      onItemHover={onItemHover}
    />
  );
}

export default OffersNear;
