class NotImplementedError extends Error {
  constructor()
  constructor(message: string)
  constructor(message: string | undefined = "The method or operation is not implemented.") {
    super(message)
  }
}