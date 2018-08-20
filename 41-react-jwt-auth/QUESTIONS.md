FAQ
===

1. Why can't the client just decode the signature and find out the secret?
  - header + payload == not sensitive data; don't care who reads it
    - these are simply encoded using `base64urlEncode`
    - that's why they can be decoded client side
  - signature == sensitive part; algorithm used here
    - remember, hashing algorithms are one way
    - that's why they cannot be decoded  
