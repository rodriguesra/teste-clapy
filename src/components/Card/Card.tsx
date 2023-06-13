import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Card.module.css';
import { CartIcon } from './CartIcon';

interface Props {
  className?: string;
}
/* @figmaId 0:3 */
export const Card: FC<Props> = memo(function Card(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle}></div>
      <div className={classes.mask}></div>
      <div className={classes.bitmap}></div>
      <div className={classes.pERFUME}>PERFUME</div>
      <div className={classes.loremIpsumDolorSi}>
        A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of
        CHANEL.
      </div>
      <div className={classes.rectangle2}></div>
      <div className={classes.group4}>
        <div className={classes.addToCart}>Add to Cart</div>
        <div className={classes.cart}>
          <CartIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.gabrielleEssenceEa}>Gabrielle Essence Eau De Parfum</div>
      <div className={classes._14999}>$149.99</div>
      <div className={classes._16999}>$169.99</div>
    </div>
  );
});
