import React from 'react';

const AccountPage = () => {
    return (
        <section className="my-account-page pt-120 pb-120">
            <div className="container">
                <div className="row wow fadeInUp animated">

                    <div className="col-xl-3 col-lg-4">
                        <div className="d-flex align-items-start">
                            <div className="nav my-account-page__menu flex-column nav-pills me-3" id="v-pills-tab"
                                 role="tablist" aria-orientation="vertical">
                                <button className="nav-link active"
                                        id="v-pills-dashboard-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-dashboard"
                                        type="button" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">
                                    <span> Dashboard</span></button>
                                <button className="nav-link" id="v-pills-orders-tab"
                                        data-bs-toggle="pill" data-bs-target="#v-pills-orders" type="button" role="tab"
                                        aria-controls="v-pills-orders" aria-selected="false"><span> Orders</span>
                                </button>
                                <button className="nav-link" id="v-pills-downloads-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-downloads" type="button" role="tab"
                                        aria-controls="v-pills-downloads" aria-selected="false"><span> Downloads</span>
                                </button>
                                <button className="nav-link" id="v-pills-address-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-address" type="button" role="tab"
                                        aria-controls="v-pills-address" aria-selected="false"><span> Address</span>
                                </button>
                                <button className="nav-link" id="v-pills-account-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-account" type="button" role="tab"
                                        aria-controls="v-pills-account" aria-selected="false">
                                    <span> Account Details</span>
                                </button>
                                <button className="nav-link"><span> Logout </span></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="tab-content " id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel"
                                 aria-labelledby="v-pills-dashboard-tab">
                                <div className="tabs-content__single">
                                    <h4><span>Hello Admin</span> (Not Admin? Logout)</h4>
                                    <h5>From your account dashboard you can view your <span>Recent Orders, manage your
                                            shipping</span> and <span>billing addresses,</span> and edit your
                                        <span>Password and account details</span></h5>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-orders" role="tabpanel"
                                 aria-labelledby="v-pills-orders-tab">
                                <div className="tabs-content__single">
                                    <h4><span>Hello Admin</span> (Not Admin? Logout)</h4>
                                    <h5>From your account dashboard you can view your <span>Recent Orders, manage your
                                            shipping</span> and <span>billing addresses,</span> and edit your
                                        <span>Password and account details</span></h5>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-downloads" role="tabpanel"
                                 aria-labelledby="v-pills-downloads-tab">
                                <div className="tabs-content__single">
                                    <h4><span>Hello Admin</span> (Not Admin? Logout)</h4>
                                    <h5>From your account dashboard you can view your <span>Recent Orders, manage your
                                            shipping</span> and <span>billing addresses,</span> and edit your
                                        <span>Password and account details</span></h5>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-address" role="tabpanel"
                                 aria-labelledby="v-pills-address-tab">
                                <div className="tabs-content__single">
                                    <h4><span>Hello Admin</span> (Not Admin? Logout)</h4>
                                    <h5>From your account dashboard you can view your <span>Recent Orders, manage your
                                            shipping</span> and <span>billing addresses,</span> and edit your
                                        <span>Password and account details</span></h5>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-account" role="tabpanel"
                                 aria-labelledby="v-pills-account-tab">
                                <div className="tabs-content__single">
                                    <h4><span>Hello Admin</span> (Not Admin? Logout)</h4>
                                    <h5>From your account dashboard you can view your <span>Recent Orders, manage your
                                            shipping</span> and <span>billing addresses,</span> and edit your
                                        <span>Password and account details</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccountPage;