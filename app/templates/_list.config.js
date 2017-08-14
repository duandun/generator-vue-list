
export const getTableColumns = (context) => {
  let columns = [{
    type: 'index',
    width: 60,
    align: 'center'
  }, {
    title: '操作',
    key: 'action',
    width: 100,
    align: 'center',
    render: (h, params) => {
      return <div></div>
    }
  }]
  return columns
}
