import 'pages/IntersectionPage/IntersectionPageStyles.css';

import { IonCard, IonCardContent, IonCardHeader } from '@ionic/react';
import DataViewer from 'components/DataViewer/DataViewer';
import IntersectionSelector from 'components/IntersectionSelector/IntersectionSelector';
import { IntersectionVennDiagramConfigStrategy } from 'components/IntersectionVennDiagram/config';
import IntersectionVennDiagram from 'components/IntersectionVennDiagram/IntersectionVennDiagram';
import { IntersectionVennDiagramIntersectionStrategy } from 'components/IntersectionVennDiagram/strategies/intersection';
import PageStruct from 'components/PageStruct/PageStruct';
import { IntersectionPageProps } from 'pages/IntersectionPage/IntersectionPageProps';
import React, { useEffect, useState } from 'react';
import { intersectionDescription } from 'utils/intersectionDescription';

const IntersectionPageView = ({
  loadTuples,
  tuplesCount,
  pairCount,
  included,
  excluded,
  loadCounts,
}: IntersectionPageProps): JSX.Element => {
  useEffect(() => {
    loadCounts();
  }, [loadCounts]);

  const [
    strategy,
    setStrategy,
  ] = useState<IntersectionVennDiagramConfigStrategy>(
    new IntersectionVennDiagramIntersectionStrategy(included, excluded)
  );
  useEffect(() => {
    setStrategy(
      new IntersectionVennDiagramIntersectionStrategy(included, excluded)
    );
  }, [included, excluded]);

  return (
    <PageStruct title={'Intersection'}>
      <div className="container">
        <div className="splitter">
          <IonCard>
            <IntersectionVennDiagram strategy={strategy} />
          </IonCard>
          <IonCard>
            <IntersectionSelector />
          </IonCard>
        </div>
        <IonCard
          className="splitter"
          style={{
            flexGrow: 100,
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
          }}
        >
          <IonCardHeader>
            <b>
              {intersectionDescription({
                excluded: excluded.map(({ name }) => name),
                included: included.map(({ name }) => name),
                pairCount,
              })}
            </b>
          </IonCardHeader>
          <IonCardContent
            style={{ minHeight: '20rem', maxHeight: '90vh', flexGrow: '1' }}
          >
            <DataViewer loadTuples={loadTuples} tuplesCount={tuplesCount} />
          </IonCardContent>
        </IonCard>
      </div>
    </PageStruct>
  );
};

export default IntersectionPageView;
