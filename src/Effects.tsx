import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

type Props =  { sourceId: string }

export function Effects({sourceId}: Props) {
    const [currentValue, setCurrentValue] = useState(-1)

    useEffect(() => {
        setCurrentValue(-1)
        subscribe(sourceId, setCurrentValue)
     return () => {
        unsubscribe(sourceId, setCurrentValue)
     }
    }, [sourceId, setCurrentValue])

    return <>{sourceId}: {currentValue}</>;
}

