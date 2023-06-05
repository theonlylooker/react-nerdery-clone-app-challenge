import { Star } from "../../../assets";
import {
  PlaceHostLayout,
  PlaceHostTitle,
  HostCard,
  HostInformation,
  HostStatistics,
  HostStatisticsItem,
  PlaceHostSpan,
  HostName,
  PlaceHostFact,
  MessageButton,
} from "./styles";

export const PlaceHost = () => {
  return (
    <PlaceHostLayout>
      <PlaceHostTitle>Meet your host</PlaceHostTitle>
      <HostCard>
        <HostInformation>
          <div>icon</div>
          <HostName>Christi-Anna</HostName>
          <div>Superhost</div>
        </HostInformation>
        <HostStatistics>
          <HostStatisticsItem>
            <PlaceHostSpan>29</PlaceHostSpan> reviews
          </HostStatisticsItem>
          <HostStatisticsItem>
            <PlaceHostSpan>
              4.9 <Star />
            </PlaceHostSpan>
            rating
          </HostStatisticsItem>
          <HostStatisticsItem>
            <PlaceHostSpan>1</PlaceHostSpan> year hosting
          </HostStatisticsItem>
        </HostStatistics>
      </HostCard>
      {/* here goes a map of items */}
      <div>
        <PlaceHostFact>
          <span>icon</span>
          <p>Born in the 80s</p>
        </PlaceHostFact>
        <PlaceHostFact>
          <span>icon</span>
          <p>Where i went to school: Carleton University</p>
        </PlaceHostFact>
        <PlaceHostFact>
          <span>icon</span>
          <p>My work : carleton University</p>
        </PlaceHostFact>
        <PlaceHostFact>
          <span>icon</span>
          <p>Fun fact: Born on Christmas Day</p>
        </PlaceHostFact>
      </div>
      {/*  ends a map of items */}
      <MessageButton>Message Host</MessageButton>
    </PlaceHostLayout>
  );
};
