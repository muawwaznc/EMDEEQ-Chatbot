
//import '../misc/css/chatbot.css'
function Chatbot() {
    return (
        <>
            <div className="container">
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="card chat-app">
                            <div id="plist" className="people-list">
                                <button
                                    id="closePeopleList"
                                    className="close-btn d-md-none"
                                    onclick="hideSidebar()"
                                >
                                    <i className="fa fa-times" />
                                </button>
                                <div className="d-flex justify-content-start mb-2">
                                    <button
                                        onclick="CreateChat()"
                                        className="btn btn-outline-secondary"
                                    >
                                        <i className="fa fa-comments" />
                                        <span id="newChatText">New Chat</span>
                                    </button>
                                </div>
                                <hr />
                                <div className="text-center">
                                    <div className="spinner-border" role="status" id="spinner">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                <ul className="chat-list mt-2 mb-0" id="chatList" />
                            </div>
                            <div className="overlay" id="overlay">
                                <button id="" className="btn btn-outline-secondary d-md-none">
                                    <i className="fa fa-bars" />
                                </button>
                            </div>
                            <div id="chat-container" className="chat">
                                <div className="chat-header clearfix">
                                    <div className="row">
                                        <div className="col-6 col-md-6 items-center">
                                            <div className="chat-about">
                                                <h6 className="mb-0">
                                                    <img src="./images/logo2x.png" alt="ANGEL" />
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-6 text-right d-flex justify-content-right">
                                            <button
                                                id="showPeopleList"
                                                className="btn btn-outline-secondary d-md-none"
                                                onclick="showSidebar()"
                                            >
                                                <i className="fa fa-bars" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-baseline justify-content-between">
                                        <span id="headerTitle" className="header-title">
                                            Social Services with privacy, dignity and care
                                        </span>
                                        {/* Language Selector */}
                                        <div className="language-selector mt-3">
                                            <button id="language-toggle" className="lang-button btn">
                                                Español
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-history">
                                    <ul className="m-b-0" id="messageList" />
                                </div>
                                <div className="chat-message clearfix">
                                    <div className="input-group mb-0">
                                        <input
                                            id="userInput"
                                            type="text"
                                            className="form-control"
                                            placeholder="Find the help you need here..."
                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <button
                                                    onclick="OnSendButtonClick()"
                                                    className="btn btn-outline-secondary"
                                                >
                                                    <i className="fa fa-send" />
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Location</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="locationOption"
                                    id="currentLocation"
                                    defaultValue="current"
                                    defaultChecked=""
                                />
                                <label className="form-check-label" htmlFor="currentLocation">
                                    Current Location
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="locationOption"
                                    id="enterPostalCode"
                                    defaultValue="postal"
                                />
                                <label className="form-check-label" htmlFor="enterPostalCode">
                                    Enter Postal Code
                                </label>
                            </div>
                            <div
                                id="postalCodeContainer"
                                style={{ display: "none", marginTop: 10 }}
                            >
                                <input
                                    type="text"
                                    required=""
                                    className="form-control"
                                    id="postalCode"
                                    placeholder="Enter postal code"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-dark"
                                onclick="SendBuiltInQuestion()"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Chatbot;
