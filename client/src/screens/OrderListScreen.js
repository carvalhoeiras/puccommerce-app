import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listOrders } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_DELETE_RESET } from '../constants/orderConstants';

export default function OrderListScreen(props) {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders());
  }, [dispatch, successDelete]);
  const deleteHandler = (order) => {
    if (window.confirm('Você deseja mesmo excluir?')) {
        dispatch(deleteOrder(order._id));
      }
  };
  return (
    <div>
      <h1>Pedidos</h1>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              {/*<th>Usuário</th>*/}
              <th>Data</th>
              <th>Total</th>
              {/*<th>Pago</th>*/}
              <th>Entregue</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
               {/*} <td>{order.user.name}</td>*/}
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>R$ {order.totalPrice.toLocaleString('pt-br', {minimumFractionDigits: 2})}</td>
                {/*<td>{order.isPaid ? order.paidAt.substring(0, 10) : 'Não'}</td>*/}
                
                <td>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : 'Não'}
                </td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/order/${order._id}`);
                    }}
                  >
                    Detalhes
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(order)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}