import React from "react";
import BnnActiveContent from "./BnnActiveContent";
import BnnArchieveContent from "./BnnArchieveContent";
import { getInitialData } from "./utils/index";

class BnnInputContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getInitialData(),
      find: "",
      title: "",
      body: "",
      countChar: 50,
    };
    this.onTitleEventHandler = this.onTitleEventHandler.bind(this);
    this.onBodyEventHandler = this.onBodyEventHandler.bind(this);
    this.onFindEventHandler = this.onFindEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
  }

  onFindEventHandler(event) {
    this.setState(
      () => {
        return {
          find: event.target.value,
        };
      },
      () => {}
    );
  }

  onTitleEventHandler(event) {
    event.preventDefault();
    if (50 - event.target.value.length >= 0) {
      this.setState(() => {
        return {
          title: event.target.value,
          countChar: 50 - event.target.value.length,
        };
      });
    }
  }

  onBodyEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onDeleteHandler(id) {
    const items = this.state.items.filter((items) => items.id !== id);
    this.setState({ items });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.title !== "" && this.state.body !== "") {
      this.setState(
        (prevState) => {
          return {
            items: [
              ...prevState.items,
              {
                id: +new Date(),
                title: prevState.title,
                body: prevState.body,
                archieved: false,
                createdAt: new Date().toISOString(),
              },
            ],
            counting: prevState.counting + 1,
            title: "",
            body: "",
          };
        },
        () => {
          console.log(this.state.items);
        }
      );
    }
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const updatedItems = prevState.items.map((item) => {
        if (item.id === id) {
          return { ...item, archieved: true };
        }
        return item;
      });
      return { items: updatedItems };
    });
  }

  onActiveHandler(id) {
    this.setState((prevState) => {
      const updatedItems = prevState.items.map((item) => {
        if (item.id === id) {
          return { ...item, archieved: false };
        }
        return item;
      });
      return { items: updatedItems };
    });
  }

  render() {
    const activeItems = this.state.items.filter(
      (item) =>
        !item.archieved &&
        item.title.toLowerCase().includes(this.state.find.toLowerCase())
    );

    const archievedItems = this.state.items.filter(
      (item) =>
        item.archieved &&
        item.title.toLowerCase().includes(this.state.find.toLowerCase())
    );
    return (
      <>
        <div id="inputContent">
          <div id="inputContent1">
            <h1>CARI CATATAN</h1>
            <input
              type="text"
              placeholder="cari catatan..."
              value={this.state.find}
              onChange={this.onFindEventHandler}
            />
          </div>
          <div id="inputContent2">
            <h1>DAFTAR CATATAN</h1>
            <form onSubmit={this.onSubmitEventHandler}>
              <h3>Judul:</h3>
              <input
                id="judul"
                type="text"
                placeholder="judul catatan"
                value={this.state.title}
                onChange={this.onTitleEventHandler}
              />
              <p id="karakter">sisa karakter: {this.state.countChar}</p>
              <h3>Isi:</h3>
              <textarea
                id="isi"
                type="text"
                placeholder="isi catatan..."
                value={this.state.body}
                onChange={this.onBodyEventHandler}
              />
              <button type="submit">Buat</button>
            </form>
          </div>
        </div>
        <BnnActiveContent
          items={activeItems}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onActive={this.onActiveHandler}
        />
        <BnnArchieveContent
          items={archievedItems}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onActive={this.onActiveHandler}
        />
      </>
    );
  }
}

export default BnnInputContent;
