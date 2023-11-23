document.addEventListener('DOMContentLoaded', function () {
 

  // Adicionar um ouvinte de evento ao botão "Finalizar Pedido"
  var finalizeButton = document.querySelector('button');
  finalizeButton.addEventListener('click', completeOrder);

  // Adicionar um ouvinte de evento para alternar a exibição dos detalhes do cartão
  var paymentMethodRadios = document.getElementsByName('paymentMethod');
  for (var i = 0; i < paymentMethodRadios.length; i++) {
    paymentMethodRadios[i].addEventListener('change', function () {
      var cardDetails = document.getElementById('card-details');
      cardDetails.style.display = this.value === 'creditCard' ? 'block' : 'none';
    });
  }
});

function completeOrder() {
  // Desabilitar o botão após o clique para evitar cliques duplicados
  document.querySelector('button').disabled = true;

  var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
  var qrCodeContainer = document.getElementById('qr-code');
  var cardDetailsContainer = document.getElementById('card-details');
  var orderCodeContainer = document.getElementById('order-code');

  // Limpar conteúdo anterior do contêiner do QR Code
  qrCodeContainer.innerHTML = '';

  if (paymentMethod === 'qrCode') {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;

    var qrText = `Pedido Finalizado\nNome: ${name}\nTelefone: ${phone}\nEndereço: ${address}`;

    var qrcode = new QRCode(qrCodeContainer, {
      text: qrText,
      width: 150,
      height: 150,
    });

    // Exibe o container do QRCode
    qrCodeContainer.style.display = 'block';

    // Oculta o container de detalhes do cartão
    cardDetailsContainer.style.display = 'none';

    // Adicionado: Gera e exibe o código do pedido
    var orderCode = generateOrderCode();
    orderCodeContainer.innerText = `Código do Pedido: ${orderCode}`;
  } else {
    // Lógica para processar pagamento por cartão de crédito/débito
    // (pode ser adicionada conforme necessário)
    alert('Pedido Finalizado com Sucesso!');

    // Exibe o container de detalhes do cartão
    cardDetailsContainer.style.display = 'block';

    // Oculta o container do QRCode
    qrCodeContainer.style.display = 'none';

    // Adicionado: Gera e exibe o código do pedido
    var orderCode = generateOrderCode();
    orderCodeContainer.innerText = `Código do Pedido: ${orderCode}`;
  }
}

// Adicionado: Função para gerar um código de pedido simples
function generateOrderCode() {
  // Gere um código aleatório ou use uma lógica específica do seu sistema
  return Math.random().toString(36).substring(7).toUpperCase();
}
