import ApartmentEntranceDate from "./apartment-entrance-date/ApartmentEntranceDate";
import ApartmentFloor from "./apartment-floor/ApartmentFloor";
import ApartmentSize from "./apartment-size/ApartmentSize";
import ImmediateEntrance from "./immediate-entrance/ImmediateEntrance";

const ApartmentGeneralInfo = ({dispatchForm, formState }) => {
    return (
      <div className='apartment-general-info-container'>
        <ApartmentFloor
          dispatchForm={dispatchForm}
          floorRange={formState.floorRange}
        />
        <ApartmentSize
          dispatchForm={dispatchForm}
          sizeRange={formState.sizeRange.value}
        />
        <ApartmentEntranceDate
          dispatchForm={dispatchForm}
          entranceDate={formState.entranceDate}
        />
        <ImmediateEntrance
          dispatchForm={dispatchForm}
          immediateEntrance={formState.immediateEntrance}
        />
      </div>
    );
};

export default ApartmentGeneralInfo;