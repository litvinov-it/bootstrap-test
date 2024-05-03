function App() {
  return (
    <main className="d-flex flex-column gap-5 py-5">
      {/* h1-h6 */}
      <div className="container text-center">
        <h1>Bootstrap</h1>
        <hr />
        <h2 className="text-black-50">Bootstrap</h2>
        <hr />
        <h3>Bootstrap</h3>
        <hr />
        <h4 className="text-black-50">Bootstrap</h4>
        <hr />
        <h5>Bootstrap</h5>
        <hr />
        <h6 className="text-black-50">Bootstrap</h6>
      </div>

      {/* grid */}
      <div className="container">
        <div className="row">
          <div className="col-sm-4">text</div>
          <div className="col-sm-4">text</div>
          <div className="col-sm-4">text</div>
        </div>
      </div>

      {/* grid 2.0 */}
      <div className="container">
        <div className="row">
          <div className="col">text</div>
          <div className="col-6">text</div>
          <div className="col">text</div>
        </div>
        <div className="row">
          <div className="col">text</div>
          <div className="col-5">text</div>
          <div className="col">text</div>
        </div>
      </div>

      {/* table */}
      <table className="container table table-bordered">
        <tbody>
          <tr className="table-warning">
            <th>1 1</th>
            <th>1 2</th>
            <th>1 3</th>
            <th>1 4</th>
          </tr>
          <tr className="table-warning">
            <th>2 1</th>
            <th>2 2</th>
            <th className="table-primary">2 3</th>
            <th>2 4</th>
          </tr>
          <tr className="table-success">
            <th>3 1</th>
            <th>3 2</th>
            <th>3 3</th>
            <th>3 4</th>
          </tr>
        </tbody>
      </table>

      {/* alert */}
      <div className="container">
        <div className="alert alert-success">alert</div>
        <div className="alert alert-danger">alert</div>
        <div className="alert alert-warning">alert</div>
        <div className="alert alert-info">alert</div>
        <div className="alert alert-light">alert</div>
        <div className="alert alert-dark">alert</div>
      </div>

      {/* buttons */}
      <div className="d-flex gap-3 container justify-content-center">
        <div className="btn btn-default">button</div>
        <div className="btn btn-primary">button</div>
        <div className="btn btn-success">button</div>
        <div className="btn btn-info">button</div>
        <div className="btn btn-warning">button</div>
        <div className="btn btn-danger">button</div>
        <div className="btn btn-link">button</div>
      </div>

      {/* form */}
      <form className="container w-50 d-flex flex-column gap-2">
        <input className="form-control" type="email" placeholder="Ваша почта" />
        <input
          className="form-control"
          type="password"
          placeholder="Ваш пароль"
        />

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="checkbox" />
          <label class="form-check-label" for="checkbox">
            Нажми меня
          </label>
        </div>

        <div className="d-flex gap-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="radio1"
              name="radio"
              checked
            />
            <label class="form-check-label" for="radio1">
              Радио 1
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="radio2"
              name="radio"
            />
            <label class="form-check-label" for="radio2">
              Радио 2
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="radio2"
              name="radio"
            />
            <label class="form-check-label" for="radio2">
              Радио 2
            </label>
          </div>
        </div>
      </form>

      {/* grid + form */}
      <div className="container">
        <div className="row">
          <div className="col">
            <label htmlFor="name" className="text-muted">
              Введите имя
            </label>
            <input
              id="name"
              type="text"
              placeholder="Имя"
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="lastname" className="text-muted">
              Введите фамилию
            </label>
            <input
              id="lastname"
              type="text"
              placeholder="Фамилия"
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="address" className="text-muted">
              Введите адрес
            </label>
            <input
              id="address"
              type="text"
              placeholder="Адрес"
              className="form-control"
              disabled
            />
          </div>
        </div>
      </div>

      {/* form drop-down list */}
      <form className="container w-50 d-flex flex-column gap-2">
        <select className="form-control">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </form>
    </main>
  );
}

export default App;
