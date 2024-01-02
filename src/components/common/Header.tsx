export default function Header() {
    return (
        <header className="d-flex justify-content-center" style={{ padding: '40px 0px', width: '100%' }}>
            <div className="container d-flex justify-content-between">
                <div className="logo"><b>CCAA</b> | ARA</div>
                <div className="functions">Logout</div>
            </div>
        </header>
    );
}