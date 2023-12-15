import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Skeleton,
} from "@chakra-ui/react";
import * as S from "./styled";
export const SellerStatistics = () => {
  return (
    <S.Main>
      <S.Container>
        <S.StatWrapper>
          <InputGroup size="md">
            <Input type={"text"} placeholder="Mahsulot izlash" />
            <InputRightElement width="4.5rem">
              <Button
                color={"#fff"}
                bg={"#0e4bc5"}
                _hover={{ background: "#1A202C" }}
                h="1.75rem"
                size="sm"
              >
                Izlash
              </Button>
            </InputRightElement>
          </InputGroup>

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
                            <S.Td>
                              <Skeleton>
                                <strong>Avtonashina uchun nasos</strong>
                              </Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                          </S.Tr>

                          <S.Tr data-row-key="0.5862388099375022">
                            <S.Td>
                              <strong>
                                <Skeleton>JAMI</Skeleton>
                              </strong>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
                            <S.Td>
                              <Skeleton>3</Skeleton>
                            </S.Td>
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
