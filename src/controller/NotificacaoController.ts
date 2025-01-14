export default class NotificacaoController {
  private containerNotificao: HTMLElement;
  private temporizador: unknown;

  constructor() {
    this.containerNotificao = document.getElementById(
      "containerNotificacao"
    ) as HTMLElement;
  }

  geraNotificacao() {
    this.containerNotificao.classList.add("notificacaoAtiva");
    this.temporizadoNotificacao();
  }

  private tiraNotificacao() {
    this.containerNotificao.classList.remove("notificacaoAtiva");
  }

  private temporizadoNotificacao() {
    clearTimeout(this.temporizador as number);
    this.temporizador = setTimeout(() => {
      this.tiraNotificacao();
    }, 4000);
  }
}
