import * as S from "./styled";
import './pay.css'
export const SellerPayment = () => {
  return (
    <S.Main>
      <S.Container>
        <S.StatWrapper>
          <S.PaymentWrap >
            <div className="card col">
              <div className="card__header">Mening hisobim</div>
              <div className="card__body">
                <ul>
                  <li>
                    <p className="key">ID raqamingiz:</p>
                    <p className="value">
                      <strong>6803721</strong>
                    </p>
                  </li>
                  <li>
                    <p className="key">Asosiy balansda:</p>
                    <p className="value">0 so'm</p>
                  </li>
                  <li>
                    <img
                      src="data:image/png;base64,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"
                      alt
                    />
                    <p className="key">Bonus balans:</p>
                    <p className="value">
                      <strong>0 COIN</strong>
                    </p>
                  </li>
                  <li>
                    <p className="key">To'lab berildi:</p>
                    <p className="value">0 so'm</p>
                  </li>
                </ul>
              </div>
            
             
            </div>
            <div className="card col">
              <p className="card__header">To'lovga sorov berish formasi</p>
              <div className="card__body">
                <form>
                  <div>
                    <div className="form-group">
                      <label className="form-label " htmlFor="input">
                        Karta raqamingizni kiriting
                      </label>
                      <input
                        name="card_number"
                        type="text"
                        className="form-control "
                        autoComplete="off"
                        maxLength={255}
                        placeholder="Karta raqamingizni kiriting"
                      />
                      <p className="form__error" />
                    </div>
                    <div className="form-group">
                      <label className="form-label " htmlFor="input">
                        Summani kiriting
                      </label>
                      <input
                        name="amount"
                        type="number"
                        className="form-control "
                        autoComplete="off"
                        maxLength={255}
                        placeholder="Summani kiriting"
                      />
                      <p className="form__error" />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary --with-loader"
                    >
                      <p>Tasdiqlash</p>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </S.PaymentWrap>
          <S.CustomTable data-columns={11}>
            <S.StatWrapper>
              <S.CustomTableAnimate>
                <S.RcTable>
                  <S.StatWrapper>
                    <S.RcTableContent>
                      <S.Table>
                        <colgroup />
                        <S.Thead>
                          <S.Tr>
                            <S.Th scope="col">Oqim</S.Th>
                            <S.Th scope="col">Tashrif</S.Th>
                            <S.Th scope="col">Yangi</S.Th>
                            <S.Th scope="col">Qabul qilindi</S.Th>
                            <S.Th scope="col">Yetkazilmoqda</S.Th>
                            <S.Th scope="col">Yetqazib berildi</S.Th>
                            <S.Th scope="col">Qayta qo'ngiroq</S.Th>
                            <S.Th scope="col">Spam</S.Th>
                            <S.Th className="rc-table-cell" scope="col">
                              Qaytib keldi
                            </S.Th>
                            <S.Th className="rc-table-cell" scope="col">
                              HOLD
                            </S.Th>
                            <S.Th className="rc-table-cell" scope="col">
                              Arxivlandi
                            </S.Th>
                          </S.Tr>
                        </S.Thead>
                        <S.Tbody>
                          <S.Tr
                            data-row-key={258716}
                            className="rc-table-row rc-table-row-level-0"
                          >
                            {/* <S.Td >
                              <strong>Avtonashina uchun nasos</strong>
                            </S.Td>
                            <S.Td >3</S.Td>
                            <S.Td >0</S.Td>
                            <S.Td >0</S.Td>
                            <S.Td >0</S.Td>
                            <S.Td >0</S.Td>
                            <S.Td >0</S.Td>
                            <S.Td >0</S.Td>
                            <S.Td >0</S.Td>
                            <S.Td >0</S.Td>
                            <S.Td >0</S.Td> */}
                          </S.Tr>

                          <S.Tr data-row-key="0.5862388099375022">
                            <S.Td>
                              <strong>JAMI</strong>
                            </S.Td>
                            <S.Td>3</S.Td>
                            <S.Td>0</S.Td>
                            <S.Td>0</S.Td>
                            <S.Td>0</S.Td>
                            <S.Td>0</S.Td>
                            <S.Td>0</S.Td>
                            <S.Td>0</S.Td>
                            <S.Td>0</S.Td>
                            <S.Td>0</S.Td>
                            <S.Td>0</S.Td>
                          </S.Tr>
                        </S.Tbody>
                      </S.Table>
                    </S.RcTableContent>
                  </S.StatWrapper>
                </S.RcTable>
              </S.CustomTableAnimate>
            </S.StatWrapper>
          </S.CustomTable>
        </S.StatWrapper>
      </S.Container>
    </S.Main>
  );
};
