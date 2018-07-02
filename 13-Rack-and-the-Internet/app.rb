class App
  def call(environment_hash)
    req = Rack::Request.new(environment_hash)
    resp = Rack::Response.new
    status_code = 200
    header = {}
    body = ['hello'] # or {}

    p resp
    if req.path.match(/kanye/)
      resp.write("I am a God")
    elsif req.path.match(/\//)
      resp.write("Now I am working...maybe?")

    end
    resp.finish
    # return [status_code, header, body]
  end
end
