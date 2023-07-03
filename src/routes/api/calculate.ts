export async function post(request) {
    const { expression } = JSON.parse(request.body);
      let result;

        try {
            result = eval(expression); // Using eval() here for simplicity since it's server-side
              } catch (error) {
                  result = 'Error';
                    }

                      return {
                          body: JSON.stringify({ result }),
                            };
                            }