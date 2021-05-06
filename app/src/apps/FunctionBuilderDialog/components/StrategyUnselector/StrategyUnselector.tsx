import { IonIcon } from '@ionic/react';
import { StrategyUnselectorProps } from 'apps/FunctionBuilderDialog/components/StrategyUnselector/StrategyUnselectorProps';
import styles from 'apps/FunctionBuilderDialog/components/StrategyUnselector/StrategyUnselectorStyles.module.css';
import UndefinedStrategy from 'apps/FunctionBuilderDialog/types/UndefinedStrategy';
import { closeCircle } from 'ionicons/icons';
import React from 'react';

const StrategyUnselector = ({
  nextStrategyType,
  setNextStrategyType,
}: StrategyUnselectorProps): JSX.Element => (
  <>
    {nextStrategyType !== UndefinedStrategy ? (
      <IonIcon
        className={styles.icon}
        icon={closeCircle}
        onClick={(): void => setNextStrategyType(UndefinedStrategy)}
      />
    ) : null}
  </>
);

export default StrategyUnselector;
