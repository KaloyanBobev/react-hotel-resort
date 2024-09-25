import React, { Component } from "react";

import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loadingMsg, featuredRooms: rooms } = this.context;

    rooms = rooms.map((roomObj) => {
      return <Room key={roomObj.id} room={roomObj} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loadingMsg ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
